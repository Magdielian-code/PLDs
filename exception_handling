#!/usr/bin/python3

errors =[]
count = 0
trial = 15
print(
    """ Welcome to the Exception Chaser Game
    Aim: Generate as many exceptions as possible
    Rules:
        - You have 15 trials
        - Each exception can be generated only once
        - You get 1 point for each new exception
        - You lose 1 point if you don't generate a valid exception
        - You win if you get 10 points
        - You don't lose, you can always try again

    """
)

while trial > 0 and count < 10:
    trial -= 1
    command = input(">>> ")

    try:
        exec(command)
        if count != 0:
            count -= 1

        print(f"Score: {count}/5 | Trials left: {trial}")
    except Exception as e:
        exceptionName = e.__class__.__name__
        if exceptionName not in errors:
            errors.append(exceptionName)
            count += 1
        elif count > 0:
            count -= 1
        else:
            count 

        print(f"Score: {count}/5 | Trials left: {trial}")
        print(f"Exception: {exceptionName}")
    continue

if count == 5:
    print(f"\nYou win | Final Score: {count}/10")
    for i in errors:
        print(f"    - {i}")
else:
    print(f"\n Final Score: {count}/10 | You can always give it another shot!")
    for i in errors:
        print(f"    - {i}")