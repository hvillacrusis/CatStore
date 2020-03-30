export default `

type Query {
        getCat(id:ID!): Cat!
        cats: [Cat!]!
        getBreed: [Cat!]!
        getBreeds: [Cat!]!
    }
    enum Breed{
        PUSAKAL
        PERSIAN
    }
  
    input CreateCatInput{
        name: String!
        lastname: String
        breed: Breed!
    }
    input UpdateCatInput{
        id:ID!
        name: String!
        lastname: String 
        breed: Breed!
    }
    input UpdateLastNameByNameInput{
       name: String!
       lastname: String!
    }
type Cat{
    id: ID!
    name: String!
    lastname: String
    breed: Breed!
}
type Mutation{
    createCat(input:CreateCatInput!): Cat!   
    deleteCat(id:ID!):Cat! 
    updateCat(input:UpdateCatInput):Cat!
    updateLastNameSingleByName(input:UpdateLastNameByNameInput): Cat!
}
`;
