function AppendMessage(msgText, date){
    li = CreateNode('li', null, 'list-group-item bg-dark border-info')
    
    small = CreateNode('small', date, 'text-secondary')

    p = CreateNode('p', msgText, null)
    p.innerText = msgText;
    
    li.appendChild(small)
    li.appendChild(p)
    
	return li
}

function createBadge(text){
    span = CreateNode('span', text, 'badge badge-success')
    span.id='notify'
    
    return span;
}

function CreateNode(node, innerText, classList){
    node = document.createElement(node);
    node.classList = classList;
    node.innerText = innerText;
    
    return node;
}