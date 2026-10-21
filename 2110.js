const choises = ['Камень', 'Ножницы', 'Бумага', 'Ящерицы', 'Спок']

const userChoises = ['Ножницы', 'Камень' , 'Бумага', 'Ящерицы', 'Спок']
let counter = 0
let per = 0
const history = []

while (counter < userChoises.length){
    const playerMove = userChoises[counter]
    
    const randomIndex = Math.floor(Math.random() * choises.length)
    const computerMove = choises[randomIndex]
    
    if (userChoises[counter]=='Камень' && computerMove=='Ножницы' || computerMove=='Ящерицы')
    {
        per = "Победа пользователя"
    }
    if (userChoises[counter]=='Ножницы' && computerMove=='Бумага' || computerMove=='Ящерицы')
    {
        per = "Победа пользователя"
    }if (userChoises[counter]=='Бумага' && computerMove=='Ножницы' || computerMove=='Спок')
    {
        per = "Победа пользователя"
    }if (userChoises[counter]=='Ящерицы' && computerMove=='Спок' || computerMove=='Бумага')
    {
        per = "Победа пользователя"
    }if (userChoises[counter]=='Спок' && computerMove=='Ножницы' || computerMove=='Ящерицы')
    {
        per = "Победа пользователя"
    }
    if (userChoises[counter]==computerMove)
    {
        per = "Ничья"
    }
    else
    {
        per = "Победа компьютера"
    }
    history.push('Раунд ' + (counter + 1) + ': Игрок - ' + playerMove + ', ' + 'Компьютер - ' + computerMove + " " + per)
    counter++
}
console.log(history)
