import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.util.Random;

/**
 * This is a game with flghts.
 * 
 * @author Andreea
 * @version 0.1
 */
public class Game extends World
{
    private static final GreenfootImage bgImage = new GreenfootImage("StartGame.jpg"); // background image for the game
    boolean active=false;
    
    private int ObstacoleCounter;
    /**
     * Constructor for objects of class MyWorld.
     * 
     */
    public Game()
    {    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(600, 400, 1, false); 
        Greenfoot.start(); //Autostart the game
        Greenfoot.setSpeed(50); // Set the speed to 30%
        setBackground(bgImage);// Set the background image
        
        //Create instance
        
        Airplane gameplayer = new Airplane ();
        addObject (gameplayer, 100, getHeight()/2);
        
    }
    
 
    public void gameOver()
   {
       setBackground("GameOver.png");             
       
       active=false;
       
       //Greenfoot.stop();
       
    }
    
    public void act() 
           
    {
        
        if(Greenfoot.isKeyDown("enter")){
            active=true;
        } 
        if(active) {
            
            setBackground("background1.jpg");
          createObstacole();
        }
        
    }    
    /**
     * An example of a method - replace this comment with your own
     *
     * @param  y   a sample parameter for a method
     * @return     the sum of x and y
     */
    private void createObstacole()
    {
        //Create Obstacole
        Obstacole topObstacole = new Obstacole("top");
        Obstacole botObstacole = new Obstacole("bottom");
        Obstacole midObstacole = new Obstacole("mid");
        //amount of space between obstacole
        int ObstacoleSpacing = 150;
        
        //get object image
        GreenfootImage image = botObstacole.getImage();
        
        //random number to vary
        int numOfObstacoles = Greenfoot.getRandomNumber(40) + 15;
        
        //counter increment to 50
        ObstacoleCounter++;
        if (ObstacoleCounter == 50)
        {
            if (getObjects(Obstacole.class).size() < numOfObstacoles)
            {
                    addObject(botObstacole, getWidth(), getHeight() / 2 + image.getHeight() - Greenfoot.getRandomNumber(100) - 10);
                    addObject(topObstacole, getWidth(), botObstacole.getY() - image.getHeight() - ObstacoleSpacing);
                    addObject(midObstacole, getWidth(), botObstacole.getY() + image.getHeight() / 3 + ObstacoleSpacing);
            }
            ObstacoleCounter = 0;
        }
    }

}