LIST_NAMES = ["ana", "julio", "doraci"]


def greater_name(list):
    bigger_name = ''
    for name in list:
        if len(name) > len(bigger_name):
            bigger_name = name
    return bigger_name


print(greater_name(LIST_NAMES))
