import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

    const club = await prisma.club.create({ 
        data: {
          name: "Barcelona", 
          location: "Spain", 
          founding_year: 1899 
        } 
      });
    }
main()

.catch(e => {console.error(e.message)})

.finally(async () => {await prisma.$disconnect()})