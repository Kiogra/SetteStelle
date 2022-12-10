from http import client
import discord
from discord.ext import commands
import os
import asyncio
from asyncio.proactor_events import _ProactorDuplexPipeTransport
import random
import discord
from discord.ext import commands
from discord import DMChannel
from random import randint
import sys

intents = discord.Intents.all()
bot = commands.Bot(command_prefix="!", intents=intents)
global islooping 
islooping= False
client = discord.Client(intents=discord.Intents.all()) 


bot.remove_command('help')

 # SETTAGGIO DADI, NON TOCARE
 
def is_me(m):
    return m.author == client.user

def is_num(s):
    try:
        int(s)
        return True
    except ValueError:
        return False


def roll_basic(a, b, modifier, threshold):
    results = ""
    base = randint(int(a), int(b))
    if (base + modifier) >= threshold:
        if modifier != 0:
            if modifier > 0:
                results += "***Success***: {}+{} [{}] Supera la difficolta di: {}.".format(base, modifier, (base + modifier), threshold)
            else:
                results += "***Success***: {}{} [{}] non supera la difficolta di: {}.".format(base, modifier, (base + modifier), threshold)
        else:
            results += "***Success***: {}".format(base)
    else:
        if modifier != 0:
            if modifier > 0:
                results += "***Failure***: {}+{} [{}]".format(base, modifier, (base + modifier))
            else:
                results += "***Failure***: {}{} [{}]".format(base, modifier, (base + modifier))
        else:
            results += "***Failure***: {}".format(base)
    return results

def roll_hit(num_of_dice, dice_type, hit, modifier, threshold):
    results = ""
    total = 0
    for x in range(0, int(num_of_dice)):
        y = randint(1, int(dice_type))
        if (int(hit) > 0):
            if (y >= int(hit)):
                results += "**{}** ".format(y)
                total += 1
            else:
                results += "{} ".format(y)
        else:
            results += "{} ".format(y)
            total += y
    total += int(modifier)
    if modifier != 0:
        if modifier > 0:
            results += "+{} = {}".format(modifier, total)
        else:
            results += "{} = {}".format(modifier, total)
    else:
        results += "= {}".format(total)
    if threshold != 0:
        if total >= threshold:
            results += " supera la difficoltà di: {}. ***Success***".format(threshold)
        else:
            results += " non supera la difficoltà di: {} . ***Failure***".format(threshold)
    return results


@bot.command(pass_context=True,description='Rolls dice.\nExamples:\n100  Rolls 1-100.\n50-100  Rolls 50-100.\n3d6  Rolls 3 d6 dice and returns total.\nModifiers:\n! Hit success. 3d6!5 Counts number of rolls that are greater than 5.\nmod: Modifier. 3d6mod3 or 3d6mod-3. Adds 3 to the result.\n> Threshold. 100>30 returns success if roll is greater than or equal to 30.\n\nFormatting:\nMust be done in order.\nSingle die roll: 1-100mod2>30\nMultiple: 5d6!4mod-2>2')
@asyncio.coroutine
def roll(ctx, roll : str):
    a, b, modifier, hit, num_of_dice, threshold, dice_type = 0, 0, 0, 0, 0, 0, 0

    author = ctx.message.author
    if (roll.find('>') != -1):
        roll, threshold = roll.split('>')
    if (roll.find('+') != -1):
        roll, modifier = roll.split('+')
    if (roll.find('!') != -1):
        roll, hit = roll.split('!')
    if (roll.find('d') != -1):
        num_of_dice, dice_type = roll.split('d')
    elif (roll.find('-') != -1):
        a, b = roll.split('-')
    else:
        a = 1
        b = roll
    #Validate data
    try:
        if (modifier != 0):
            if (is_num(modifier) is False):
                raise ValueError("Errore di formato del valore del modificatore. Uso corretto 1d4+1")
                return
            else:
                modifier = int(modifier)
        if (hit != 0):
            if (is_num(hit) is False):
                raise ValueError("Errore formato valore hit. Uso corretto 3d6!5")
                return
            else:
                hit = int(hit)
        if (num_of_dice != 0):
            if (is_num(num_of_dice) is False):
                raise ValueError("Numero di errori di formato dei dadi. Uso corretto 3d6")
                return
            else:
                num_of_dice = int(num_of_dice)
        if (num_of_dice > 200):
            raise ValueError("Troppi dadi. Si prega di limitare a 200 o meno.")
            return
        if (dice_type != 0):
            if (is_num(dice_type) is False):
                raise ValueError("Errore di formato del tipo di dado. Uso corretto 3d6")
                return
            else:
                dice_type = int(dice_type)
        if (a != 0):
            if (is_num(a) is False):
                raise ValueError("Errore: il minimo deve essere un numero. Uso corretto 1-50.")
                return
            else:
                a = int(a)
        if (b != 0):
            if (is_num(b) is False):
                raise ValueError("Errore: il massimo deve essere un numero. Uso corretto 1-50 o 50.")
                return
            else:
                b = int(b)
        if (threshold != 0):
            if (is_num(threshold) is False):
                raise ValueError("Error: Threshold must be a number. Proper usage 1-100>30")
                return
            else:
                threshold = int(threshold)
        if (dice_type != 0 and hit != 0):
            if (hit > dice_type):
                raise ValueError("Error: Hit value cannot be greater than dice type")
                return
            elif (dice_type < 0):
                raise ValueError("Dice type cannot be a negative number.")
                return
            elif (num_of_dice < 0):
                raise ValueError("Number of dice cannot be a negative number.")
                return
        if a != 0 and b != 0:
            yield from ctx.send("{} ⟵  [{}]   {}d{}.".format(author, a, b, roll_basic(a, b, modifier, threshold)))
        else:
            yield from ctx.send("**[{}]**  `{}d{}`.".format(roll_hit(num_of_dice, dice_type, hit, modifier, threshold), num_of_dice, dice_type, ))
    except ValueError as err:
        # Display error message to channel
        yield from ctx.send(err)




bot.run('')


sys.stdout.flush()