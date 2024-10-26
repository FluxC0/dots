# This is the file to store all of the variables for the ascii art.


class Ascii:
    arch = r"""
       .
      / \
     /   \      
    /^.   \     
   /  .-.  \    
  /  (   ) _\   
 / _.~   ~._^\
/.^         ^.\ 
    """

    generic = r"""
    .--.
   |o_o |
   |:_/ |
  //   \ \
 (|     | )
/'\_   _/`\
\___)=(___/  
    """

    endeavouros = r"""
          /*
    #${c2}*****
     #${c2}********#
    ##${c2}**********##
   ##*${c2}************##
 ###*${c2}*************##
   ###############
    """

    def retrieve_ascii(osName):
    # gonna support some of the major ones, can PR a pull request if it becomes a whole deal
        if osName == 'arch':
            return Ascii.arch
        else:
            return Ascii.generic