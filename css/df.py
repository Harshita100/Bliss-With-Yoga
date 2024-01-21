from tkinter import *
from tkinter import messagebox
root = Tk()
root.title("demo")
root.geometry('400x400')
w1 = Button(root,bg = "red", text = "submit")
def click():
    messagebox.showinfo("wowsa","green button clicked")
Checkbutton1 = IntVar() # holds integer data passed to the checkbutton widget
Checkbutton2 = IntVar()
Checkbutton3 = IntVar()

cb1=Checkbutton(root, text="Painting",variable = Checkbutton1,onvalue = 1,offvalue = 0,height = 2,width = 10)
cb2=Checkbutton(root, text = "Dancing", variable = Checkbutton2,onvalue = 1,offvalue = 0,height = 2,width = 10) 
cb3=Checkbutton(root, text = "Cooking", variable = Checkbutton3,onvalue = 1,offvalue = 0,height = 2,width = 10)
cb1.pack()
cb2.pack()
cb3.pack()
root.mainloop()