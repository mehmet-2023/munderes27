// ── Icon SVGs (small: titlebar / taskbar) ──────────────────────────────────
const WIN98_ICONS = {
    folder: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><path d="M2,6 L12,6 L15,9 L30,9 L30,26 L2,26 Z" fill="#ffd700" stroke="#000" stroke-width="1"/><path d="M2,9 L30,9" stroke="#fff" stroke-width="1"/><path d="M4,11 L28,11 L28,24 L4,24 Z" fill="#ffe680"/></svg>`,
    notepad: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><rect x="4" y="2" width="22" height="28" fill="#fff" stroke="#000" stroke-width="1"/><rect x="2" y="4" width="22" height="26" fill="#fff" stroke="#000" stroke-width="1"/><line x1="6" y1="8" x2="20" y2="8" stroke="#000080" stroke-width="2"/><line x1="6" y1="12" x2="20" y2="12" stroke="#808080" stroke-width="1"/><line x1="6" y1="16" x2="20" y2="16" stroke="#808080" stroke-width="1"/><line x1="6" y1="20" x2="20" y2="20" stroke="#808080" stroke-width="1"/><line x1="6" y1="24" x2="16" y2="24" stroke="#808080" stroke-width="1"/><path d="M22,18 L28,24 L24,28 L18,22 Z" fill="#f00" stroke="#000" stroke-width="1"/></svg>`,
    recycleBin: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><rect x="8" y="8" width="16" height="20" rx="1" fill="#c0c0c0" stroke="#000" stroke-width="1"/><line x1="6" y1="8" x2="26" y2="8" stroke="#000" stroke-width="2"/><rect x="12" y="5" width="8" height="3" fill="#c0c0c0" stroke="#000" stroke-width="1"/><line x1="12" y1="12" x2="12" y2="24" stroke="#808080" stroke-width="1"/><line x1="16" y1="12" x2="16" y2="24" stroke="#808080" stroke-width="1"/><line x1="20" y1="12" x2="20" y2="24" stroke="#808080" stroke-width="1"/></svg>`,
    help: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><circle cx="16" cy="16" r="12" fill="#000080" stroke="#000" stroke-width="1"/><circle cx="16" cy="16" r="6" fill="#fff"/><text x="16" y="21" font-family="sans-serif" font-weight="bold" font-size="14" fill="#000080" text-anchor="middle">?</text></svg>`,
    settings: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><rect x="2" y="6" width="28" height="20" fill="#c0c0c0" stroke="#000" stroke-width="1"/><rect x="4" y="8" width="24" height="3" fill="#000080"/><circle cx="12" cy="18" r="5" fill="#808080" stroke="#000" stroke-width="1"/><rect x="18" y="14" width="8" height="8" fill="#fff" stroke="#000" stroke-width="1"/></svg>`
};

// ── Icon SVGs (large: desktop) ─────────────────────────────────────────────
const WIN98_DESKTOP_ICONS = {
    folder: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><path d="M2,6 L12,6 L15,9 L30,9 L30,26 L2,26 Z" fill="#ffd700" stroke="#000" stroke-width="1"/><path d="M2,9 L30,9" stroke="#fff" stroke-width="1"/><path d="M4,11 L28,11 L28,24 L4,24 Z" fill="#ffe680"/></svg>`,
    notepad: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="4" y="2" width="22" height="28" fill="#fff" stroke="#000" stroke-width="1"/><rect x="2" y="4" width="22" height="26" fill="#fff" stroke="#000" stroke-width="1"/><line x1="6" y1="8" x2="20" y2="8" stroke="#000080" stroke-width="2"/><line x1="6" y1="12" x2="20" y2="12" stroke="#808080" stroke-width="1"/><line x1="6" y1="16" x2="20" y2="16" stroke="#808080" stroke-width="1"/><line x1="6" y1="20" x2="20" y2="20" stroke="#808080" stroke-width="1"/><line x1="6" y1="24" x2="16" y2="24" stroke="#808080" stroke-width="1"/><path d="M22,18 L28,24 L24,28 L18,22 Z" fill="#f00" stroke="#000" stroke-width="1"/></svg>`,
    recycleBin: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="20" rx="1" fill="#c0c0c0" stroke="#000" stroke-width="1"/><line x1="6" y1="8" x2="26" y2="8" stroke="#000" stroke-width="2"/><rect x="12" y="5" width="8" height="3" fill="#c0c0c0" stroke="#000" stroke-width="1"/><line x1="12" y1="12" x2="12" y2="24" stroke="#808080" stroke-width="1"/><line x1="16" y1="12" x2="16" y2="24" stroke="#808080" stroke-width="1"/><line x1="20" y1="12" x2="20" y2="24" stroke="#808080" stroke-width="1"/></svg>`,
    help: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#000080" stroke="#000" stroke-width="1"/><circle cx="16" cy="16" r="10" fill="none" stroke="#fff" stroke-dasharray="4,3" stroke-width="2"/><circle cx="16" cy="16" r="6" fill="#fff"/><text x="16" y="21" font-family="sans-serif" font-weight="bold" font-size="14" fill="#000080" text-anchor="middle">?</text></svg>`,
    settings: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="2" y="6" width="28" height="20" fill="#c0c0c0" stroke="#000" stroke-width="1"/><rect x="4" y="8" width="24" height="3" fill="#000080"/><circle cx="12" cy="18" r="5" fill="#808080" stroke="#000" stroke-width="1"/><path d="M12,11 L12,25 M5,18 L19,18 M7,13 L17,23 M7,23 L17,13" stroke="#000" stroke-width="1"/><rect x="18" y="14" width="8" height="8" fill="#fff" stroke="#000" stroke-width="1"/></svg>`
};

const DESKTOP_APPS = [
    { id: 'conf_details',  name: 'Conference details',            icon: WIN98_ICONS.folder,     desktopIcon: WIN98_DESKTOP_ICONS.folder },
    { id: 'prev_editions', name: 'Previous editions',             icon: WIN98_ICONS.folder,     desktopIcon: WIN98_DESKTOP_ICONS.folder },
    { id: 'fee_info',      name: 'Fee Information',               icon: WIN98_ICONS.folder,     desktopIcon: WIN98_DESKTOP_ICONS.folder },
    { id: 'our_team',      name: 'Our Team',                      icon: WIN98_ICONS.folder,     desktopIcon: WIN98_DESKTOP_ICONS.folder },
    { id: 'sec_letter',    name: 'Letter From Secretary General', icon: WIN98_ICONS.notepad,    desktopIcon: WIN98_DESKTOP_ICONS.notepad },
    { id: 'recycle_bin',   name: 'Recycle bin',                   icon: WIN98_ICONS.recycleBin, desktopIcon: WIN98_DESKTOP_ICONS.recycleBin },
    { id: 'help',          name: 'Help',                          icon: WIN98_ICONS.help,       desktopIcon: WIN98_DESKTOP_ICONS.help },
    { id: 'settings',      name: 'Settings',                      icon: WIN98_ICONS.settings,   desktopIcon: WIN98_DESKTOP_ICONS.settings }
];

// ── Grid snap constants ────────────────────────────────────────────────────
const GRID_COLS_PADDING = 10; // px from left edge
const GRID_ROWS_PADDING = 10; // px from top edge
const CELL_W = 90;            // grid cell width  (icon width 85 + gap)
const CELL_H = 90;            // grid cell height (icon + label + gap)

// Map of "col,row" → appId for occupied cells
const gridOccupied = {};

function cellKey(col, row) { return `${col},${row}`; }

function gridToPixel(col, row) {
    return {
        x: GRID_COLS_PADDING + col * CELL_W,
        y: GRID_ROWS_PADDING + row * CELL_H
    };
}

function pixelToGrid(px, py) {
    return {
        col: Math.round((px - GRID_COLS_PADDING) / CELL_W),
        row: Math.round((py - GRID_ROWS_PADDING) / CELL_H)
    };
}

function getContainerSize() {
    const c = document.getElementById('desktop-icons-container');
    return { w: c.clientWidth, h: c.clientHeight };
}

function maxCols() { return Math.max(1, Math.floor((getContainerSize().w - GRID_COLS_PADDING) / CELL_W)); }
function maxRows() { return Math.max(1, Math.floor((getContainerSize().h - GRID_ROWS_PADDING) / CELL_H)); }

// Find the nearest empty grid cell to (col, row), searching outward
function findNearestEmpty(preferCol, preferRow, excludeId) {
    const cols = maxCols();
    const rows = maxRows();

    preferCol = Math.max(0, Math.min(cols - 1, preferCol));
    preferRow = Math.max(0, Math.min(rows - 1, preferRow));

    // BFS outward from preferred cell
    const visited = new Set();
    const queue = [{ col: preferCol, row: preferRow }];
    visited.add(cellKey(preferCol, preferRow));

    while (queue.length) {
        const { col, row } = queue.shift();
        const key = cellKey(col, row);
        const occupant = gridOccupied[key];
        if (!occupant || occupant === excludeId) return { col, row };

        for (const [dc, dr] of [[0,1],[1,0],[0,-1],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]) {
            const nc = col + dc, nr = row + dr;
            const nk = cellKey(nc, nr);
            if (nc >= 0 && nc < cols && nr >= 0 && nr < rows && !visited.has(nk)) {
                visited.add(nk);
                queue.push({ col: nc, row: nr });
            }
        }
    }
    // fallback: first row after grid
    return { col: 0, row: rows };
}

function placeIconAt(iconEl, appId, col, row) {
    // Remove old occupation
    for (const key of Object.keys(gridOccupied)) {
        if (gridOccupied[key] === appId) delete gridOccupied[key];
    }
    gridOccupied[cellKey(col, row)] = appId;
    iconEl.dataset.gridCol = col;
    iconEl.dataset.gridRow = row;

    const { x, y } = gridToPixel(col, row);
    iconEl.style.left = x + 'px';
    iconEl.style.top  = y + 'px';
}

// ── Drag ghost element ─────────────────────────────────────────────────────
let ghostEl = null;

function showGhost(col, row) {
    if (!ghostEl) {
        ghostEl = document.createElement('div');
        ghostEl.style.cssText = `
            position:absolute; width:${CELL_W - 4}px; height:${CELL_H - 4}px;
            border:1px dashed rgba(255,255,255,0.6);
            background:rgba(255,255,255,0.08);
            pointer-events:none; z-index:500; box-sizing:border-box;
        `;
        document.getElementById('desktop-icons-container').appendChild(ghostEl);
    }
    const { x, y } = gridToPixel(col, row);
    ghostEl.style.left = x + 'px';
    ghostEl.style.top  = y + 'px';
    ghostEl.style.display = 'block';
}

function hideGhost() {
    if (ghostEl) ghostEl.style.display = 'none';
}

// ── Make a desktop icon draggable with grid-snap (mouse + touch) ────────────
function makeIconDraggable(iconEl, app) {
    let dragging = false;
    let startPointerX, startPointerY;
    let startLeft, startTop;
    const DRAG_THRESHOLD = 8;

    function beginDrag(clientX, clientY) {
        startPointerX = clientX;
        startPointerY = clientY;
        startLeft     = iconEl.offsetLeft;
        startTop      = iconEl.offsetTop;
        dragging      = false;
    }

    function moveDrag(clientX, clientY) {
        const dx = clientX - startPointerX;
        const dy = clientY - startPointerY;

        if (!dragging && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
            dragging = true;
            iconEl.style.opacity      = '0.6';
            iconEl.style.zIndex       = '9000';
            iconEl.style.pointerEvents = 'none';
            document.querySelectorAll('.win98-icon').forEach(el => el.classList.remove('selected'));
        }
        if (!dragging) return;

        const px = startLeft + dx;
        const py = startTop  + dy;
        iconEl.style.left = px + 'px';
        iconEl.style.top  = py + 'px';

        const { col, row } = pixelToGrid(px, py);
        showGhost(findNearestEmpty(col, row, app.id).col, findNearestEmpty(col, row, app.id).row);
    }

    function endDrag() {
        iconEl.style.opacity       = '1';
        iconEl.style.zIndex        = '1';
        iconEl.style.pointerEvents = '';

        if (dragging) {
            dragging = false;
            hideGhost();
            const px = iconEl.offsetLeft;
            const py = iconEl.offsetTop;
            const { col, row } = pixelToGrid(px, py);
            const best = findNearestEmpty(col, row, app.id);
            placeIconAt(iconEl, app.id, best.col, best.row);
        }
    }

    // ── Mouse ──────────────────────────────────────────────────────────────
    iconEl.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        e.preventDefault();
        beginDrag(e.clientX, e.clientY);

        function onMove(ev) { moveDrag(ev.clientX, ev.clientY); }
        function onUp()     { endDrag(); document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); }
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup',   onUp);
    });

    // ── Touch ──────────────────────────────────────────────────────────────
    iconEl.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        // Don't preventDefault here so click/dblclick still fires on short taps
        const t = e.touches[0];
        beginDrag(t.clientX, t.clientY);

        function onMove(ev) {
            if (ev.touches.length !== 1) return;
            ev.preventDefault(); // prevent page scroll only when we know it's a drag
            moveDrag(ev.touches[0].clientX, ev.touches[0].clientY);
        }
        function onUp() {
            endDrag();
            iconEl.removeEventListener('touchmove',   onMove);
            iconEl.removeEventListener('touchend',    onUp);
            iconEl.removeEventListener('touchcancel', onUp);
        }
        iconEl.addEventListener('touchmove',   onMove, { passive: false });
        iconEl.addEventListener('touchend',    onUp);
        iconEl.addEventListener('touchcancel', onUp);
    }, { passive: true });
}


// ── State ──────────────────────────────────────────────────────────────────
let openWindows   = {};
let activeWindowId = null;
let zIndexCounter  = 10;

// ── Desktop init ───────────────────────────────────────────────────────────
function initDesktop() {
    const container      = document.getElementById('desktop-icons-container');
    const startMenuItems = document.getElementById('start-menu-items');
    container.innerHTML      = '';
    startMenuItems.innerHTML = '';

    DESKTOP_APPS.forEach((app, index) => {
        // Initial grid position: top column, icons stacked downward
        const col = 0;
        const row = index;

        const iconEl = document.createElement('div');
        iconEl.className = 'win98-icon';
        iconEl.dataset.id = app.id;
        // Absolute positioning for grid system
        iconEl.style.position = 'absolute';
        iconEl.style.width    = (CELL_W - 4) + 'px';
        iconEl.innerHTML = `${app.desktopIcon}<span class="win98-icon-text">${app.name}</span>`;

        placeIconAt(iconEl, app.id, col, row);

        iconEl.addEventListener('click', (e) => {
            if (e.defaultPrevented) return;
            e.stopPropagation();
            document.querySelectorAll('.win98-icon').forEach(el => el.classList.remove('selected'));
            iconEl.classList.add('selected');
        });

        iconEl.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            openAppWindow(app);
        });

        makeIconDraggable(iconEl, app);
        container.appendChild(iconEl);

        // Start menu entry
        const startItem = document.createElement('div');
        startItem.className = 'win98-start-item';
        startItem.innerHTML = `${app.icon}<span style="font-size:11px;">${app.name}</span>`;
        startItem.addEventListener('click', () => {
            openAppWindow(app);
            toggleStartMenu(false);
        });
        startMenuItems.appendChild(startItem);
    });

    document.getElementById('win98-desktop').addEventListener('click', (e) => {
        if (!e.target.closest('.win98-icon')) {
            document.querySelectorAll('.win98-icon').forEach(el => el.classList.remove('selected'));
        }
        toggleStartMenu(false);
    });

    setupTaskbar();
    updateClock();
    setInterval(updateClock, 1000);
}

// ── Taskbar ────────────────────────────────────────────────────────────────
function setupTaskbar() {
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleStartMenu();
    });
}

function toggleStartMenu(forceState) {
    const menu = document.getElementById('start-menu');
    const btn  = document.getElementById('start-btn');
    const next = forceState !== undefined ? forceState : menu.style.display !== 'flex';
    if (next) {
        menu.style.display = 'flex';
        btn.classList.add('active');
    } else {
        menu.style.display = 'none';
        btn.classList.remove('active');
    }
}

function updateClock() {
    const el  = document.getElementById('tray-clock');
    const now = new Date();
    let h     = now.getHours();
    const m   = now.getMinutes().toString().padStart(2, '0');
    const ap  = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    el.textContent = `${h}:${m} ${ap}`;
}

// ── Window management ──────────────────────────────────────────────────────
function openAppWindow(app) {
    if (openWindows[app.id]) { focusWindow(app.id); return; }

    zIndexCounter++;
    const winEl = document.createElement('div');
    winEl.className  = 'win98-window';
    winEl.id         = `window-${app.id}`;
    winEl.style.zIndex = zIndexCounter;

    const offsetX = 40 + (Object.keys(openWindows).length * 20) % 200;
    const offsetY = 40 + (Object.keys(openWindows).length * 20) % 150;
    winEl.style.left   = offsetX + 'px';
    winEl.style.top    = offsetY + 'px';
    winEl.style.width  = '420px';
    winEl.style.height = '280px';

    winEl.innerHTML = `
        <div class="win98-window-titlebar" id="titlebar-${app.id}">
            <div class="win98-window-title-text">
                ${app.icon}
                <span>${app.name}</span>
            </div>
            <div class="win98-window-controls">
                <div class="win98-win-btn win-minimize">_</div>
                <div class="win98-win-btn win-maximize">□</div>
                <div class="win98-win-btn win-close">✕</div>
            </div>
        </div>
        <div class="win98-window-content">
            <p style="margin-top:0;">Welcome to <strong>${app.name}</strong>.</p>
            <p>Content for this module is being constructed...</p>
        </div>
    `;

    document.getElementById('win98-desktop').appendChild(winEl);

    const taskItem = document.createElement('div');
    taskItem.className = 'win98-task-item active';
    taskItem.id        = `task-${app.id}`;
    taskItem.innerHTML = `${app.icon}<span>${app.name}</span>`;
    taskItem.addEventListener('click', () => {
        if (activeWindowId === app.id) {
            winEl.style.display = 'none';
            taskItem.classList.remove('active');
            activeWindowId = null;
        } else {
            winEl.style.display = 'flex';
            focusWindow(app.id);
        }
    });

    document.getElementById('taskbar-tasks').appendChild(taskItem);
    openWindows[app.id] = { winEl, taskItem };
    focusWindow(app.id);

    makeDraggable(winEl, document.getElementById(`titlebar-${app.id}`));

    winEl.querySelector('.win-close').addEventListener('click', () => closeWindow(app.id));
    winEl.querySelector('.win-minimize').addEventListener('click', () => {
        winEl.style.display = 'none';
        taskItem.classList.remove('active');
        if (activeWindowId === app.id) activeWindowId = null;
    });
    winEl.querySelector('.win-maximize').addEventListener('click', () => {
        if (winEl.dataset.maximized === 'true') {
            winEl.style.top    = winEl.dataset.oldTop;
            winEl.style.left   = winEl.dataset.oldLeft;
            winEl.style.width  = winEl.dataset.oldWidth;
            winEl.style.height = winEl.dataset.oldHeight;
            winEl.dataset.maximized = 'false';
        } else {
            winEl.dataset.oldTop    = winEl.style.top;
            winEl.dataset.oldLeft   = winEl.style.left;
            winEl.dataset.oldWidth  = winEl.style.width;
            winEl.dataset.oldHeight = winEl.style.height;
            winEl.style.top    = '0px';
            winEl.style.left   = '0px';
            winEl.style.width  = '100%';
            winEl.style.height = 'calc(100% - 30px)';
            winEl.dataset.maximized = 'true';
        }
    });
    winEl.addEventListener('mousedown', () => focusWindow(app.id));
}

function focusWindow(id) {
    activeWindowId = id;
    zIndexCounter++;
    Object.keys(openWindows).forEach(winId => {
        const item = openWindows[winId];
        const isActive = winId === id;
        if (isActive) {
            item.winEl.style.zIndex = zIndexCounter;
            item.winEl.querySelector('.win98-window-titlebar').classList.remove('inactive');
            item.taskItem.classList.add('active');
        } else {
            item.winEl.querySelector('.win98-window-titlebar').classList.add('inactive');
            item.taskItem.classList.remove('active');
        }
    });
}

function closeWindow(id) {
    if (openWindows[id]) {
        openWindows[id].winEl.remove();
        openWindows[id].taskItem.remove();
        delete openWindows[id];
        if (activeWindowId === id) activeWindowId = null;
    }
}

// ── Window drag (titlebar) — mouse + touch ─────────────────────────────────
function makeDraggable(winEl, handleEl) {
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0;

    // ── Mouse ──────────────────────────────────────────────────────────────
    handleEl.addEventListener('mousedown', onMouseDown);

    function onMouseDown(e) {
        if (e.target.classList.contains('win98-win-btn')) return;
        if (winEl.dataset.maximized === 'true') return;
        e.preventDefault();
        p3 = e.clientX; p4 = e.clientY;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup',   onMouseUp);
    }
    function onMouseMove(e) {
        e.preventDefault();
        p1 = p3 - e.clientX; p2 = p4 - e.clientY;
        p3 = e.clientX;      p4 = e.clientY;
        winEl.style.top  = (winEl.offsetTop  - p2) + 'px';
        winEl.style.left = (winEl.offsetLeft - p1) + 'px';
    }
    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup',   onMouseUp);
    }

    // ── Touch ──────────────────────────────────────────────────────────────
    handleEl.addEventListener('touchstart', onTouchDown, { passive: false });

    function onTouchDown(e) {
        if (e.target.classList.contains('win98-win-btn')) return;
        if (winEl.dataset.maximized === 'true') return;
        if (e.touches.length !== 1) return;
        e.preventDefault();
        p3 = e.touches[0].clientX;
        p4 = e.touches[0].clientY;
        document.addEventListener('touchmove',   onTouchMove, { passive: false });
        document.addEventListener('touchend',    onTouchUp);
        document.addEventListener('touchcancel', onTouchUp);
    }
    function onTouchMove(e) {
        if (e.touches.length !== 1) return;
        e.preventDefault();
        const tx = e.touches[0].clientX;
        const ty = e.touches[0].clientY;
        p1 = p3 - tx; p2 = p4 - ty;
        p3 = tx;      p4 = ty;
        winEl.style.top  = (winEl.offsetTop  - p2) + 'px';
        winEl.style.left = (winEl.offsetLeft - p1) + 'px';
    }
    function onTouchUp() {
        document.removeEventListener('touchmove',   onTouchMove);
        document.removeEventListener('touchend',    onTouchUp);
        document.removeEventListener('touchcancel', onTouchUp);
    }
}


window.addEventListener('DOMContentLoaded', initDesktop);
