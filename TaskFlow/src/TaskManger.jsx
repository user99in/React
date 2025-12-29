import { useState } from "react";
 

function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design new landing page", category: "work", priority: "high", completed: false },
    { id: 2, title: "Review pull requests", category: "work", priority: "medium", completed: false },
    { id: 3, title: "Buy groceries", category: "personal", priority: "low", completed: false },
    { id: 4, title: "Gym workout", category: "personal", priority: "medium", completed: true },
    { id: 5, title: "Team meeting at 3 PM", category: "work", priority: "high", completed: false },
    { id: 6, title: "Read book for 30 mins", category: "personal", priority: "low", completed: true },
  ]);
  
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("work");
  const [selectedPriority, setSelectedPriority] = useState("medium");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        {
          id: Date.now(),
          title: newTask,
          category: selectedCategory,
          priority: selectedPriority,
          completed: false,
        },
        ...tasks,
      ]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    active: tasks.filter(t => !t.completed).length,
  };

  return (
    <div className="task-container">
      <div className="task-background">
        <div className="task-blob task-blob-1"></div>
        <div className="task-blob task-blob-2"></div>
        <div className="task-blob task-blob-3"></div>
      </div>

      <div className="task-main-card">
        <header className="task-header">
          <div className="task-header-top">
            <div className="task-logo">
              <span className="task-logo-icon">✓</span>
              <h1 className="task-logo-text">TaskFlow</h1>
            </div>
            <div className="task-date-box">
              <p className="task-date">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
          
          <div className="task-stats-container">
            <div className="task-stat-card">
              <span className="task-stat-value">{stats.total}</span>
              <span className="task-stat-label">Total</span>
            </div>
            <div className="task-stat-card">
              <span className="task-stat-value">{stats.active}</span>
              <span className="task-stat-label">Active</span>
            </div>
            <div className="task-stat-card">
              <span className="task-stat-value">{stats.completed}</span>
              <span className="task-stat-label">Done</span>
            </div>
          </div>
        </header>

        <div className="task-add-section">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            className="task-input"
          />
          
          <div className="task-options">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="task-select"
            >
              <option value="work">💼 Work</option>
              <option value="personal">🏠 Personal</option>
            </select>
            
            <select 
              value={selectedPriority} 
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="task-select"
            >
              <option value="high">🔴 High</option>
              <option value="medium">🟡 Medium</option>
              <option value="low">🟢 Low</option>
            </select>
            
            <button onClick={addTask} className="task-add-button">
              Add Task
            </button>
          </div>
        </div>

        <div className="task-filter-buttons">
          {["all", "active", "completed"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`task-filter-btn ${filter === f ? "task-filter-btn-active" : ""}`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="task-list">
          {filteredTasks.length === 0 ? (
            <div className="task-empty-state">
              <span className="task-empty-icon">📋</span>
              <p className="task-empty-text">No tasks found</p>
            </div>
          ) : (
            filteredTasks.map((task, index) => (
              <div 
                key={task.id} 
                className="task-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="task-left">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`task-checkbox ${task.completed ? "task-checkbox-checked" : ""}`}
                  >
                    {task.completed && <span className="task-checkmark">✓</span>}
                  </button>
                  
                  <div className="task-content">
                    <p className={`task-title ${task.completed ? "task-title-completed" : ""}`}>
                      {task.title}
                    </p>
                    <div className="task-meta">
                      <span className={`task-badge ${task.category === "work" ? "task-badge-work" : "task-badge-personal"}`}>
                        {task.category === "work" ? "💼" : "🏠"} {task.category}
                      </span>
                      <span className={`task-badge task-badge-${task.priority}`}>
                        {task.priority === "high" ? "🔴" : 
                         task.priority === "medium" ? "🟡" : "🟢"} {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => deleteTask(task.id)}
                  className="task-delete-btn"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;