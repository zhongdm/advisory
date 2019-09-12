function strToPathReg (path, loc) {
  let subPath = path.replace('/', '')
  if (subPath && loc.split('/').indexOf(subPath) !== -1) {
    return path
  }
  return null
}
export function getCurrentMenu (location, menuList) {
  // for (let i = 0; i < menuList.length; i++) {
  //   let menu = menuList[i]
  //   getCurrentMenu(location, menu.childMenus, current)
  //   if (menu.menuId && menu.menuId === location) {
  //     current.push(menu.menuName)
  //     if (menu.childMenus) {
  //       getCurrentMenu(location, menu.childMenus, current)
  //     }
  //   }
  // }
  if (!!menuList) {
   
  let current = []
  for (let i = 0; i < menuList.length; i++) {
    let menu = menuList[i]
    const child = getCurrentMenu(location, menu.childMenus)
    if (!!child && child.length > 0) {
      child.push(menu.menuName)
      return child
    }
    if (menu.id && menu.id === location) {
      current.push(menu.menuName)
      return current
    }
  }
  return current
   
}
return null
}


export function setPermission (element) {
  for (let i = 0; i < element.length; i++) {
    let obj = element[i]
    obj.activePermission = []
    if (obj.isLeaf || obj.childMenus.length === 0) {
      obj.pList = ['list', 'add', 'edit', 'delete']
    } else {
      obj.pList = ['list', 'add']
    }
    
    element[i] = obj
    if (obj.childMenus.length > 0) {
      setPermission(obj.childMenus)
    }
  }
  return element
}


export function filterData (data, checkedKeys,  parent = data) {
  if (data.length > 0) {
    data.forEach(item => {
      if (item.menuType !== '0'){
        if (item.childMenus.length > 0) {
        filterData(item.childMenus, checkedKeys, item)
        }
      }else  {
        parent.authList = data
        parent.childMenus = []
        parent.checkedAll = []
        data.forEach(item => {
          if (checkedKeys.indexOf(item.id) !== -1) {
            parent.checkedAll.push(item.id)
          }
        })
        return false
      }  
    })
    
  }
  return parent
}