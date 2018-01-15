import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Obstacole here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Obstacole extends Members
{
    private static final GreenfootImage Bottom = new GreenfootImage("bottom_obstacle.png");
    private static final GreenfootImage Top = new GreenfootImage("top_obstacle.png");
    private static final GreenfootImage Mid = new GreenfootImage("mid_obstacle.png");
    
    public Obstacole(String selection)
    {
        this.xSpeed = 4;
        if (selection == "top")
        {
            setImage(Top);
        }
        else if (selection == "bottom")
        {
            setImage(Bottom);
        }
        else if (selection == "mid")
        {
            setImage(Mid);
        }
    }
    
    /**
     * Act - do whatever the Obstacole wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public void act() 
    {
      this.moveLeft();
      removeObstacole();
    }    
    
    /**
     * Past the screen Obstacole
     */
    private void removeObstacole()
    {
        if (getX() < - getImage().getWidth())
        {
            getWorld().removeObject(this);
        }
    }
    
}
