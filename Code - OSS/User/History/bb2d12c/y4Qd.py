# This is the file to store all of the variables for the ascii art.


class Ascii:
    arch = """
           \e[0;36m.
         \e[0;36m/ \
        \e[0;36m/   \      
       \e[0;36m/^.   \     
      \e[0;36m/  .-.  \    
     \e[0;36m/  (   ) _\   
    \e[1;36m/ _.~   ~._^\
   \e[1;36m/.^         ^.\ \e[0;37mTM
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


    def retrieve_ascii(osName):
    # gonna support some of the major ones, can PR a pull request if it becomes a whole deal
        if osName == 'arch':
            return Ascii.arch
        else:
            return Ascii.generic