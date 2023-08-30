# Done By: Osama Abdo Modhish

#  Function to generate the Fibonacci sequence
def fibonacci_sequence(n):
    if n <= 0:
        raise ValueError("n must be non-negative integer")
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        #  Recursive call to generate the Fibonacci sequence
        sequence = fibonacci_sequence(n - 1)
        sequence.append(sequence[-1] + sequence[-2])
        return sequence  # Return the generated sequence


n = int(input("Enter a positive integer:> "))
print("The Fibonacci sequence up to the", n, "the term is:")

result = fibonacci_sequence(n)

print(f"Fibonacci sequence is :", result)
