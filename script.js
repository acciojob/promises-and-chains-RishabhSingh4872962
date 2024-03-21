//your JS code here. If required.
 function handleSubmit() {
	this.event.preventDefault();
	console.log(this.event.target.name.value)
	new Promise((res,rej)=>{
		if (this.event.target.age.value>18) {
			setTimeout(res,4000,`Welcome, ${this.event.target.name.value}. You can vote.`)
		}else{
			setTimeout(rej,4000,`Oh sorry ${this.event.target.name.value}. You aren't old enough.`)
		}
	}).then((data)=>{
		alert(data)
	}).catch((data)=>{
		alert(data);
	})
}