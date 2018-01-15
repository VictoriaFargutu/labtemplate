import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * This is the Members class.
 * 
 * @author Andreea
 * @version 0.1
 */
public class Members extends Actor
{
    protected int frame; // declare variable to be used to increment animation frames
    protected int animationDelay; // declare variable to be used to slow down the animation
    protected int xSpeed;

    protected void moveLeft()
    {
        setLocation(getX() - this.xSpeed, getY());
    }
}
