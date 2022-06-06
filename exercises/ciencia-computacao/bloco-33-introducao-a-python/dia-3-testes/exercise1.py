

def list_values(number):
    numbers = []
    for num in range(1, number + 1):
        if num % 15 == 0:
            numbers.append("FizzBuzz")
        elif num % 3 == 0:
            numbers.append("Fizz")
        elif num % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(num)
    return numbers


print(list_values(15))
