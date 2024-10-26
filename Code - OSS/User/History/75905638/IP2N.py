from ascii import Ascii
import distro
import argparse
import subprocess

targetAscii = distro.id()


kernVer = subprocess.run(
    ['uname', '-r'],
    capture_output = True, # Python >= 3.7 only
    text = True # Python >= 3.7 only
)

kernVer = kernVer.stdout

def retrieve_ascii(osName):
    # gonna support some of the major ones, can PR a pull request if it becomes a whole deal
    if osName = arch:
        return Ascii.arch
    else:
        return Ascii.generic


