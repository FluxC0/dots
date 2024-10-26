from ascii import Ascii
import distro
import argparse
import subprocess

targetAscii = distro.id()
print(targetAscii)

kernVer = subprocess.run(
    ['uname', '-r'],
    capture_output = True, # Python >= 3.7 only
    text = True # Python >= 3.7 only
)

kernVer = kernVer.stdout


