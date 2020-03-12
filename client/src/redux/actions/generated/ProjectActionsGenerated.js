/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e6a85b49f48c9443d27400c
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN ProjectActionsGenerated.js PLEASE EDIT ../ProjectActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import ProjectApi from "../../../api/ProjectApi";

let actionsFunction = {

  //CRUD METHODS

  // Create project
  createProject: function(project) {
    return function(dispatch) {
      return ProjectApi
        .createProject(project)
        .then(project => {
          dispatch(actionsFunction.createProjectSuccess(project));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createProjectSuccess: function(project) {
    return { type: types.CREATE_PROJECT_SUCCESS, payload: project };
  },


  // Delete project
  deleteProject: function(id) {
    return function(dispatch) {
      return ProjectApi
        .deleteProject(id)
        .then(project => {
          dispatch(actionsFunction.deleteProjectSuccess(project));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteProjectSuccess: function(project) {
    return { type: types.DELETE_PROJECT_SUCCESS, payload: project };
  },


  // Get project
  loadProject: function(id) {
    return function(dispatch) {
      return ProjectApi
        .getOneProject(id)
        .then(project => {
          dispatch(actionsFunction.loadProjectSuccess(project));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadProjectSuccess: function(project) {
    return { type: types.GET_PROJECT_SUCCESS, payload: project };
  },

  // Load  list
  loadProjectList: function() {
    return function(dispatch) {
      return ProjectApi
        .getProjectList()
        .then(list => {
          dispatch(actionsFunction.loadProjectListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadProjectListSuccess: function(list) {
    return { type: types.LIST_PROJECT_SUCCESS, payload: list };
  },

	
  // Save project
  saveProject: function(project) {
    return function(dispatch) {
      return ProjectApi
        .saveProject(project)
        .then(project => {
          dispatch(actionsFunction.saveProjectSuccess(project));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveProjectSuccess: function(project) {
    return { type: types.UPDATE_PROJECT_SUCCESS, payload: project };
  },


};

export default actionsFunction;
