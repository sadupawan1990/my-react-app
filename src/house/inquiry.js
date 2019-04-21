import React, { Component } from 'react';

class Inquiry extends Component {
    state = {
        name: "",
        email: "",
        remarks: ""
    }

    onFieldChanges = (e) => {
        e.preventDefault();
        let name = e.target.name;
        this.setState({ [name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const house = this.props.house;
        const contactInfo = this.state;
        console.log(contactInfo);
    }

    render() {
        return <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" placeholder="Name"
                    id="name" name="name" value={this.state.name} onChange={this.onFieldChanges} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" placeholder="Email"
                    id="email" name="email" value={this.state.email} onChange={this.onFieldChanges} />
            </div>
            <div className="form-group">
                <label htmlFor="remarks">Remarks</label>
                <input type="text" className="form-control" placeholder="Remarks"
                    id="remarks" name="remarks" value={this.state.remarks} onChange={this.onFieldChanges} />
            </div>
            <button className="btn btn-primary" disabled={this.state.name.length == 0 ||
                this.state.email.length == 0} onClick={this.onSubmit}>Submit</button>
        </form>

    }
}

export default Inquiry;