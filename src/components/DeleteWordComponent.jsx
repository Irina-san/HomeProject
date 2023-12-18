import React from 'react';

const DeleteWordComponent = () => {

const handleDelete = () => {
console.log('Слово удалено');
}

return (
<div>
<h3>Удалить слово:</h3>
<button onClick={handleDelete}>Удалить</button>
</div>
);
};

export default DeleteWordComponent;