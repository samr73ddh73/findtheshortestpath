export function bfs(grid,startNode,endNode)
{
    const vis=Array()
    const q=Array()
    q.push(startNode)
    startNode.isVisited=true
    vis.push(startNode)
    let currentNode=startNode
    currentNode.previousNode=null
    while(q.length>0)
    {
        currentNode=q.shift()
        if(currentNode==endNode)
        {   
            vis.push(currentNode) 
            return vis;
        }
        for(const cell of neighbors(grid,currentNode))
        {
            if(cell.isWall)
                continue
            q.push(cell)
            vis.push(cell)
            cell.isVisited=true
            cell.previousNode=currentNode
        }
    }
    return vis;
}

function neighbors(grid,startNode)
{
    const neighbors = [];
    const {col, row} = startNode;
    if (row > 0 )    
        neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) 
        neighbors.push(grid[row + 1][col]);
    if (col > 0) 
        neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) 
        neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
}

export function getNodesInShortestPathOrderBFS(endNode)
{
    const nodesInShortestPathOrder = [];
    let currentNode = endNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
}