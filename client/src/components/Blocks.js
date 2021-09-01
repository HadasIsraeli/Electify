import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Block from './Block';
import { NavLink } from 'react-router-dom';

class Blocks extends Component {
    state = { blocks: [], paginatedId: 1, blocksLength: 0 };

    componentDidMount() {
        fetch(`${document.location.origin}/api/blocks/length`)
            .then(response => response.json())
            .then(json => this.setState({ blocksLength: json }));

        this.fetchPaginatedBlocks(this.state.paginatedId)();
    }

    fetchPaginatedBlocks = paginatedId => () => {
        fetch(`${document.location.origin}/api/blocks/${paginatedId}`)
            .then(response => response.json())
            .then(json => this.setState({ blocks: json }));
    }

    render() {
        // console.log('this.state', this.state);

        return (
            <div className='App'>
                <br />
                <div>
                    <nav className="nav-wrapper blue darken-9">
                        <div>
                            <ul className="center">
                                <li><NavLink to="/BlockApp">Exit</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <h3>Blocks</h3>
                <div>
                    {
                        [...Array(Math.ceil(this.state.blocksLength / 5)).keys()].map(key => {
                            const paginatedId = key + 1;

                            return (
                                <span key={key} onClick={this.fetchPaginatedBlocks(paginatedId)}>
                                    <Button bsSize="small">{paginatedId}</Button>{' '}
                                </span>
                            )
                        })
                    }
                </div>
                {
                    this.state.blocks.map(block => {
                        return (
                            <Block key={block.hash} block={block} />
                        );
                    })
                }
            </div>
        );
    }
}

export default Blocks;