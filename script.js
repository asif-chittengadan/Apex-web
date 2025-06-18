
const contactForm = document.getElementById('contactForm');
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const imageUrlInput = document.getElementById('imageUrlInput');
const addImageBtn = document.getElementById('addImageBtn');
const imageGallery = document.getElementById('imageGallery');

function validateName(name) {
    if (!name.trim()) {
        return 'Name is required';
    }
    if (name.trim().length < 2) {
        return 'Name must be at least 2 characters long';
    }
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
        return 'Name can only contain letters and spaces';
    }
    return '';
}

function validateEmail(email) {
    if (!email.trim()) {
        return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }
    return '';
}

function validatePhone(phone) {
    if (phone.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''))) {
        return 'Please enter a valid phone number';
    }
    return '';
}

function validateMessage(message) {
    if (!message.trim()) {
        return 'Message is required';
    }
    if (message.trim().length < 10) {
        return 'Message must be at least 10 characters long';
    }
    return '';
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = message ? 'block' : 'none';
}

function clearError(elementId) {
    showError(elementId, '');
}

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const messageError = validateMessage(message);

    showError('nameError', nameError);
    showError('emailError', emailError);
    showError('phoneError', phoneError);
    showError('messageError', messageError);

    if (!nameError && !emailError && !phoneError && !messageError) {
  
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();

        clearError('nameError');
        clearError('emailError');
        clearError('phoneError');
        clearError('messageError');
    }
});


document.getElementById('name').addEventListener('blur', function() {
    const error = validateName(this.value);
    showError('nameError', error);
});

document.getElementById('email').addEventListener('blur', function() {
    const error = validateEmail(this.value);
    showError('emailError', error);
});

document.getElementById('phone').addEventListener('blur', function() {
    const error = validatePhone(this.value);
    showError('phoneError', error);
});

document.getElementById('message').addEventListener('blur', function() {
    const error = validateMessage(this.value);
    showError('messageError', error);
});


let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <span class="todo-text">${todo.text}</span>
            <div class="todo-actions">
                <button class="todo-btn complete-btn" onclick="toggleTodo(${index})">
                    ${todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="todo-btn delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        
        todoList.appendChild(li);
    });
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
        todos.push({
            text: text,
            completed: false,
            id: Date.now()
        });
        saveTodos();
        renderTodos();
        todoInput.value = '';
    }
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

let images = JSON.parse(localStorage.getItem('galleryImages')) || [];

function saveImages() {
    localStorage.setItem('galleryImages', JSON.stringify(images));
}

function renderImages() {
    imageGallery.innerHTML = '';
    images.forEach((image, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        
        div.innerHTML = `
            <img src="${image.url}" alt="Gallery image ${index + 1}" onerror="this.src='https://via.placeholder.com/200x200?text=Image+Not+Found'">
            <button class="remove-btn" onclick="removeImage(${index})">&times;</button>
        `;
        
        imageGallery.appendChild(div);
    });
}

function addImage() {
    const url = imageUrlInput.value.trim();
    if (url) {
        // Basic URL validation
        try {
            new URL(url);
            images.push({
                url: url,
                id: Date.now()
            });
            saveImages();
            renderImages();
            imageUrlInput.value = '';
        } catch (e) {
            alert('Please enter a valid URL');
        }
    }
}

function removeImage(index) {
    images.splice(index, 1);
    saveImages();
    renderImages();
}

addImageBtn.addEventListener('click', addImage);
imageUrlInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addImage();
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    renderTodos();
    renderImages();

    if (images.length === 0) {
        const sampleImages = [
            'https://picsum.photos/300/200?random=1',
            'https://picsum.photos/300/200?random=2',
            'https://picsum.photos/300/200?random=3'
        ];
        
        sampleImages.forEach(url => {
            images.push({
                url: url,
                id: Date.now() + Math.random()
            });
        });
        saveImages();
        renderImages();
    }
});

document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
}); 