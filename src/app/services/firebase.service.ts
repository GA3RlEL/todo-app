import { Injectable, inject } from "@angular/core";
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from "@angular/fire/firestore";
import { AddTag, Tag } from "../models/todos.model";

@Injectable({providedIn:"root"})
export class FirebaseService{
  firestore = inject(Firestore);
  todosCollection = collection(this.firestore, 'todos');
  tagsCollection = collection(this.firestore,'tags');


  getTodos(){
    return collectionData(this.todosCollection,{
      idField:'id'
    })
  }

  getTags(){
    return collectionData(this.tagsCollection,{idField:'id'})
  }

  addTag(tag:AddTag){
    addDoc(this.tagsCollection,tag)
  }

  deleteTag(id:string){
    const docRef = doc(this.firestore,'tags/' + id);
    deleteDoc(docRef);
  }
}
