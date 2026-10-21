

let computerWin = 0
let userWin = 0
let per = 0
const history = []
let counter = 0

while (computerWin != 3 || userWin != 3)
{ 
    const userChoises = prompt()
    console.log(userChoises)
    
    const choises = ['Камень', 'Ножницы', 'Бумага', 'Ящерицы', 'Спок']
   
    const randomIndex = Math.floor(Math.random() * choises.length)
    const computerMove = choises[randomIndex]
    console.log(computerMove)

    if (!choises.includes(userChoises))
    {
        console.log("Нет такого варианта")
        continue
    }
    if (userChoises === 'Камень' && (computerMove==='Ножницы' || computerMove==='Ящерицы'))
    {
        userWin = userWin + 1
        per = " Победа пользователя"
        continue
    }
    else if (userChoises === 'Ножницы' && (computerMove==='Бумага' || computerMove==='Ящерицы'))
    {
        userWin = userWin + 1
        per = " Победа пользователя"
        continue
    }
    else if (userChoises==='Бумага' && (computerMove==='Камень' || computerMove==='Спок'))
    {
        userWin = userWin + 1
        per = " Победа пользователя"
        continue
    }
    else if (userChoises==='Ящерицы' && (computerMove==='Спок' || computerMove==='Бумага'))
    {
        userWin = userWin + 1
        per = " Победа пользователя"
        continue
    }
    else if (userChoises==='Спок' && (computerMove==='Ножницы' || computerMove==='Камень'))
    {
        userWin = userWin + 1
        per = " Победа пользователя"
        continue
    }
    else if (userChoises===computerMove)
    {
        per = " Ничья"
        continue
    }
    else
    {
        computerWin = computerWin + 1
        per = " Победа компьютера"
    }
    history.push(`Раунд ${counter + 1} : Игрок -  ${playerMove}  Компьютер - ${computerMove  + per}`)
    counter ++
}


history.forEach((el) => {
    console.log(el)
});