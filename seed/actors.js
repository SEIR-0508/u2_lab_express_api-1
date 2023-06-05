const db = require('../db')
const  { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const willFerrell = new Actor(
        {
            name: "Will Ferrell",
            age: 55,
            isAlive: true
            
        })
        
        await willFerrell.save()
    
    
    
    const jimCarrey = new Actor(
        {
            name: "Jim Carrey",
            age: 61,
            isAlive: true
        })
        
        await jimCarrey.save()
    
    
    
    const jackieChan = new Actor(
        {
            name: "Jackie Chan",
            age: 69,
            isAlive: true
        })
        
        await jackieChan.save()
    
    
    
    
    const daveChappelle = new Actor(
        {
            name: "Dave Chappelle",
            age: 49,
            isAlive: true
        })
        
        daveChappelle.save()
    
    
    
    
    const margotRobbie = new Actor(
        {
            name: "Margot Robbie",
            age: 32,
            isAlive: true
        })
        
        margotRobbie.save()
}

//////////////////////////////////////////

    const jackieChanMovie1 = new Movie ({
        title: 'Rumble in the Bronx'
        runtime: 90,
        rating: '9/10',
        year_released: '1996'
        image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Rumble-in-the-Bronx-poster.jpg'
        description: 'Rumble in the Bronx (Chinese title: 紅番區, Hong Faan Kui (transl. Red Turn District)[6] is a 1995 American-Hong Kong martial arts film starring Jackie Chan, Anita Mui and Françoise Yip. It was directed by Stanley Tong, with action choreographed by Chan and Tong.'

    })

    const jackieChanMovie2 = new Movie ({
        title: 'Rush Hour',
        runtime: 98,
        rating: '10/10',
        year_released: '1998',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/49/Rush_Hour_poster.png',
        description: "Rush Hour is a 1998 American buddy action comedy film directed by Brett Ratner and written by Jim Kouf and Ross LaManna from a story by LaManna. It stars Jackie Chan and Chris Tucker as mismatched police officers who are assigned to rescue a Chinese diplomat's abducted daughter."
    })

    const jackieChanMovie3 = new Movie ({
        title: 'Mulan',
        runtime: 87,
        rating: '9/10',
        year_released: '1998',
        image: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Movie_poster_mulan.JPG',
        description: 'Mulan is a 1998 American animated musical adventure film produced by Walt Disney Feature Animation for Walt Disney Pictures. Based on the Chinese legend of Hua Mulan, it is the 36th Disney animated feature film, and the ninth animated film produced and released during the Disney Renaissance'
    })

    const jackieChanMovie4 = new Movie ({
        title: 'Kung Fu Panda',
        runtime: 92,
        rating: '9/10',
        year_released: '2008',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Kungfupanda.jpg/220px-Kungfupanda.jpg',
        description: 'Kung Fu Panda is a 2008 American computer-animated martial arts comedy film produced by DreamWorks Animation and distributed by Paramount Pictures. The first installment in the Kung Fu Panda franchise, it was directed by John Stevenson, in his feature directorial debut, co-directed by Mark Osborne and written by Jonathan Aibel and Glenn Berger, from a story by Ethan Reiff and Cyrus Voris.'
    })

    const jackieChanMovie5 = new Movie ({
        title: 'The Karate Kid',
        runtime: 140,
        rating: '8/10',
        year_released: '2010',
        image: '' ,
        description: 'The plot concerns 12-year-old Dre Parker (Jaden Smith), from Detroit, Michigan, who moves to Beijing, China with his mother (Taraji P. Henson) and runs afoul of the neighborhood bully Cheng (Zhenwei Wang). He makes an unlikely ally in the form of an aging maintenance man, Mr. Han (Jackie Chan), a kung fu master who teaches him the secrets of self-defense. '
    })

/////////////////////////////////////////////////////////


    const daveChappelleMovie1 = new Movie ({
        title: "Robin Hood: Men in Tights",
        runtime: 104,
        rating: '6/10',
        year_released: '1993',
        image: 'https://upload.wikimedia.org/wikipedia/en/1/12/RobinHoodMeninTights_Poster.jpg',
        description: ' Robin Hood: Men in Tights is a 1993 adventure comedy film and a parody of the Robin Hood story.'
    })


    const daveChappelleMovie2 = new Movie ({
        title: 'The Nutty Professor',
        runtime: 96,
        rating: '8/10',
        year_released: '1996',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Nutty_professor_ver1.jpg',
        description: 'The Nutty Professor is a 1996 American science fiction comedy film starring Eddie Murphy. It is a remake of the 1963 film of the same name.  A research scientist, academic, and lecturer, Klump develops a miraculous, but experimental, weight-loss pharmaceutical, and hoping to win the affection of the girl of his dreams, tests it upon himself.'
    })


    const daveChappelleMovie3 = new Movie ({
        title: 'Half Baked',
        runtime: 82,
        rating: '7/10',
        year_released: '1998',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Half-baked-dvd-cover.jpg/220px-Half-baked-dvd-cover.jpg',
        description: 'Half Baked is a 1998 American stoner comedy film starring Dave Chappelle, Jim Breuer, Harland Williams, and Guillermo Díaz.'
    })


    const daveChappelleMovie4 = new Movie ({
        title: 'Blue Streak',
        runtime:93,
        rating: '9/10',
        year_released: '1999',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Blue_Streak_film_poster.jpg/220px-Blue_Streak_film_poster.jpg',
        description: 'Blue Streak is a 1999 American buddy cop action comedy film directed by Les Mayfield. Inspired by the 1965 film The Big Job, the film stars Martin Lawrence, Luke Wilson, Dave Chappelle, Peter Greene, Nicole Ari Parker and William Forsythe. Lawrence plays Miles, a jewel thief who tries to retrieve a diamond he left at a police station, whereupon he disguises himself as a detective and gets paired with a real policeman to investigate burglaries.'
    })


    const daveChappelleMovie5 = new Movie ({
        title: 'Undercover Brother',
        runtime: 88,
        rating: '7/10',
        year_released: '2002',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Undercover_Brother_poster.JPG/220px-Undercover_Brother_poster.JPG',
        description: 'The screenplay by John Ridley and Michael McCullers is based on the Internet animated series created by Ridley.'
    })


/////////////////////////////////////////////////////////
   