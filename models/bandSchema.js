db.runCommand( {
   collMod: "bands",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "name", "genre" ],
      properties: {
         name: {
            bsonType: "string",
            description: "name must be a string and is required"
         },
         genre: {
            bsonType: "string",
            description: "genre must be a string and is required"
         },
         description: {
            bsonType: "string",
            description: "description must be a string and is not required"
         },
        formed: {
            bsonType: "int",
            description: "formed must be an integer and is not required"
         }
      }
   } },
   validationLevel: "strict"
} )