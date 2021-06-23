const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const containerHTML = document.querySelector('.icons-content');

/**
 * 
 * @param {*} choice 
 * @param {*} firstList 
 */
function filterIcons(choice, firstList) {
    return firstList.filter((item) => {
        if (choice === 'all') {
            return true;
        }
        if (choice === icon.type) {
            return true;
        }
        return false;
    });
}

function filterToHtml (filter) {
    const iconsOutput = filterIcons(filter, icons);
    iconsOutput.forEach((icon) => {
    const {name, prefix, family, type } = icon;
    containerHTML.innerHTML += `
        <div class="card col">
            <div class="card-inner">
                <div class="icon ${type}">
                    <i class="${family} ${prefix}${name}"></i>
                </div>
                <div class="name">
                    ${name}
                </div>
            </div>
        </div>
    `
});
}

filterToHtml('all');
const itemChoice = document.querySelector ('.type-select');
itemChoice.addEventListener('change', () => {
    filterToHtml(event.target.value);
});