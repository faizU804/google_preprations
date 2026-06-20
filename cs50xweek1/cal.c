#include <stdio.h>
int main (void)
{
    int x ;
    int y ;

    printf("Enter value of x ");
    scanf("%d", &x);

    printf("Enter value of y");
    scanf("%d", &y);

    int z = x + y;

    printf("%i\n ", z);
}