import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Airplane here.
 * 
 * @author Andreea 
 * @version 0.1
 */
public class Airplane extends Members
{
    private static final GreenfootImage imageAirplane = new GreenfootImage("airplane.png"); //declare airplane's image
    private static final GreenfootImage imageAirplane2 = new GreenfootImage("airplane2.png"); //declare airplane's image
    private static final GreenfootImage imageAirplane3 = new GreenfootImage("airplane3.png");
    private static final GreenfootImage gameOver = new GreenfootImage("GameOver.png");
    
    private double valocity = 0; // Initial velocity value
    private int shotTimer = 0;
    
    public Airplane()
    {
        setImage(imageAirplane);
        this.animationDelay = 4; // sets the animationDelay value from Members class to the value of 4
    }

    /**
     * Act - do whatever the Airplane wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public void act() 
    {
        applyVelocity();
        mouseUsed();
        animateAirplane();
        checkCollision();
    }    

    /**
     * Constantly appply velocity to Airplane
     */
    private void applyVelocity ()
    {
        setLocation(getX(),getY());
    }

    /**
     * Check if the specific keyboard key has been pressed. If it has, react accordingly;
     * Do the same if the mouse has been used;
     */
    private void mouseUsed()
    {
        if (Greenfoot.mouseMoved(null))
        {
            MouseInfo mouse = Greenfoot.getMouseInfo();
            setLocation (mouse.getX(), mouse.getY());
        }
    }

    /**
     * Switch between the different images
     */
    private void animateAirplane()
    {
        this.frame++;
        if (this.frame < 1 * this.animationDelay)
        {
            setImage(imageAirplane);
        }
        else if (this.frame < 2 * this.animationDelay)
        {
            setImage(imageAirplane2);
        }
        else if (this.frame < 3 * this.animationDelay)
        {
            setImage(imageAirplane3);
        }
        else if (this.frame < 4 * this.animationDelay)
        {
            setImage(imageAirplane);
            this.frame = 0;
        }
    }

    private void checkCollision()
    {
        Actor Obstacole = getOneIntersectingObject(Obstacole.class);
        if (Obstacole != null)
        {
            Greenfoot.stop();
            setImage(gameOver);
           getWorld().removeObject(Obstacole);
        }
    }

}
