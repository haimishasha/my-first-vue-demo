<template>
	<div>
		<fieldset>
			<legend>
				Create New Person
			</legend>
			<div>
				<label>Name:</label>
				<input type="text" v-model="newPerson.name"/>
			</div>
			<div>
				<label>Age:</label>
				<input type="text" v-model="newPerson.age"/>
			</div>
			<div>
				<label>Sex:</label>
				<select v-model="newPerson.sex">
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			</div>
			<div>
				<label></label>
				<button @click="createPerson">Create</button>
			</div>
		</fieldset>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Age</th>
					<th>Sex</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(person,index) in people">
					<td>{{ person.name }}</td>
					<td>{{ person.age }}</td>
					<td>{{ person.sex }}</td>
					<td :class="'text-center'"><button @click="deletePerson(index)">Delete</button></td>
					<!-- <td :class="'text-center'"><button @click="deletePerson($index)">Delete</button></td> -->
				</tr>
			</tbody>
		</table>
	</div> 
</template>


<script>
export default {
  	name: 'content',
	data() {
		return{
			newPerson: {
				name: '',
				age: 0,
				sex: 'Male'
			},
			people: [{
				name: 'Jack',
				age: 30,
				sex: 'Male'
			}, {
				name: 'Bill',
				age: 26,
				sex: 'Male'
			}, {
				name: 'Tracy',
				age: 22,
				sex: 'Female'
			}, {
				name: 'Chris',
				age: 36,
				sex: 'Male'
			}]
		}
	},
	methods:{
		createPerson: function(){
			this.people.push(this.newPerson);
			// 添加完newPerson对象后，重置newPerson对象
			this.newPerson = {name: '', age: 0, sex: 'Male'}
		},
		deletePerson: function(index){
			// 删一个数组元素
			this.people.splice(index,1);
		}
	}
}
</script>