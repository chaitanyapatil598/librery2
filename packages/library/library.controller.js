
module.exports={
    addLibrary:(req,res,next)=>{
        try{ 
            const libreryData= req.body
        
            return res.send({
                data:libreryData,
                message: ' librery added succesfully',
                status:true,
                statusCode:200
            })

        } catch(error){
            return res.send({
                message: ' internal server error at add librery',
                status:false,
                statusCode:500
            })

        }

    }
}