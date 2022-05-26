def vertical_name(name):
    for delete_letter in range(len(name)):
        for index in range(len(name) - delete_letter):
            print(name[index], end="")
        print()


vertical_name("ana")