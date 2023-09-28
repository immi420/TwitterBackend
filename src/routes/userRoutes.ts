import e, { Router } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const router= Router();
const prisma= new PrismaClient();

// User CRUD
// Create user
router.post('/',async (req, res) => {
    const {name,email,username}=req.body;
    try{
        const result= await prisma.user.create(
            {
                data:{
                    name,
                    email,
                    username,
                    bio:" Welcome to my app",
                }
            }
        )
        res.json(result);

    }
    catch (e) {
        res.status(400).json({
            erorr:"Username and Email should be unique"
        });
    }
  
});

// list users
router.get('/',async (req, res) => {
    const allUser=await prisma.user.findMany();
    res.json(allUser);
    // res.status(501).json({ error: 'Not Implemented' });
});

//get one user
router.get('/:id', async(req, res) => {
    const { id }=req.params;
    const user=await prisma.user.findUnique({where:{id:Number(id)}});
    res.json(user);
});

/// update user
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { bio, name, image } = req.body;
  
    try {
      const result = await prisma.user.update({
        where: { id: Number(id) },
        data: { bio, name, image },
      });
      res.json(result);
    } catch (e) {
      res.status(400).json({ error: `Failed to update the user` });
    }
  });
  
  // curl -X DELETE http://localhost:3000/user/6
  // delete user
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: Number(id) } });
    res.sendStatus(200);
  });
  
export default router;