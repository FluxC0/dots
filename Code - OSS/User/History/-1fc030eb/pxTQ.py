import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk


class MyWindow(Gtk.Window):
    def __init__(self):
        super().__init__(title="Music Controls")