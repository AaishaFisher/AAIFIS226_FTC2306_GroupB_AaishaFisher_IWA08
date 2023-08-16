const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name: leoName,
	balance: leoBalance,
	access id: 47afb38980144d0baff3e40203d2107f,
	age: 24,
	address {
		number: leoNumber,
		street: leoStreet,
		postal-code: leoPostal
    }
}

const sarah = {
	name: sarahName + sarahSurname,
	age: 62,
	access id = 6b279ae55657424080e923f6b635f7a8,
	balance = sarahBalance,
	address {
		number: sarahNumber,
		street: sarahStreet,
		postal-code: sarahPostal
	}

}
console.log(leo, leo.address.postal-code)
console.log(sarah, sarah.address.postal-code)