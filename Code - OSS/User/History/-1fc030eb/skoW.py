import gi
import subprocess

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk


class MyWindow(Gtk.Window):
    def __init__(self):
        super().__init__(title="Music Controls")
        self.button = Gtk.Button(label="Forward")

        self.button.connect("clicked", self.ff)

        self.add(self.button)

        def ff(self, widget):
            subprocess.run(["playerctl", "next"])



win = MyWindow()

win.connect("destroy", Gtk.main_quit)

win.show_all()

Gtk.main()
