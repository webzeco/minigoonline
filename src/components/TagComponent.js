import React, { Component } from 'react'
import { WithContext as ReactTags } from "react-tag-input";

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDelete(i) {
        this.setState({
            tags: this.state.tags.filter((tag, index) => index !== i)
        });
    }

    handleAddition(tag) {
        let { tags } = this.state;
        this.setState({ tags: [...tags, { id: tags.length + 1, text: tag }] });

    }

    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);
        this.setState({ tags });

    }

    render() {
        const { tags } = this.state;
        this.props.setTag(tags)


        return (
            <div>
                <ReactTags
                    tags={tags}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters}
                />
            </div>
        );
    }
}