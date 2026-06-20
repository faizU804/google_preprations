#include <stdio.h>
int main (void)
{
    const int n = 5;
    // this is for row 
    for ( int row = 0; row < n; row++){
        // this is for column
        for ( int column = 0; column < n; column++  ){
            printf("#");
        }
        printf("\n");
    }
}