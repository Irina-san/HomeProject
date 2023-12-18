import React from 'react';

const HeaderComponent = () => {
return (
<header>
<h1>Приложение "Мои карточки"</h1>
<nav>
<ul>
<li><a href="/">Главная</a></li> //использовать маршрутизацию React Router//
<li><a href="/word-list">Список слов</a></li>
<li><a href="/add-word">Добавить слово</a></li>
<li><a href="/edit-word">Редактировать слово</a></li>
<li><a href="/delete-word">Удалить слово</a></li>
</ul>
</nav>
</header>
);
};

export default HeaderComponent;