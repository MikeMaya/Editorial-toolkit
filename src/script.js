import React from 'react';
import database from './firebase/firebase'


export default class ScriptLoader{
    state = {
        usersRoute: "http://elvortex.com/wp-json/wp/v2/users",
        categoriesRoute: "http://elvortex.com/wp-json/wp/v2/categories"
    };
    load_database = () => {
        this.load_users().then( () => 
            this.load_categories().then( () =>
                console.log("Base de datos cargada")
            )
        )
    };
    load_users = () => {
        const query="?per_page=100&amp;";        
        return fetch(this.state.usersRoute+query)
          .then((response) => response.json())
          .then((responseJson) => {
                const users = responseJson.map((resp) => ({
                    id: resp.id,
                    data: {
                        nickname: resp.name,
                        slug: resp.slug
                    }
                }));
                users.forEach(user => {
                    database.ref(`/users/${user.id}`).set(user.data);
                });
          })
          .catch((error) => {
            console.error(error);
          });
    };  

    load_categories = () => {
        const query="?per_page=100&amp;";        
        return fetch(this.state.categoriesRoute+query)
          .then((response) => response.json())
          .then((responseJson) => {
            const categories = responseJson.map((resp) => ({
                id: resp.id,
                data: {
                    nickname: resp.name,
                    slug: resp.slug
                }
            }));
            categories.forEach(category => {
                database.ref(`/categories/${category.id}`).set(category.data);
            });
          })
          .catch((error) => {
            console.error(error);
          });
    };
}