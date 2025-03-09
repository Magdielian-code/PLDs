#include <stdio.h> 

int integer_add(int x, int y) 
{
    int result;
    result = x + y;
    return result;
}

int main(void)
{
    int sum; 
    sum = integer_add(5, 6); 
    printf("Howdy, here is the result of adding the two integers: %d\n", sum);

    char c1;
    char c2;

    c1 = 'A';
    c2 = 'a';

    printf("Convert the value of c1 to character: %c. \n", c1);
    printf("Convert the value of c2 to character: %c. \n", c2); 

    return 0;
}

#