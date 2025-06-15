/**
 * Project: node-finite-state-machine
 * Version: 1.0.0
 * Author:  Ivan De Stefani
 * Since:   15/06/2025
 */

/**
 * Typing the Finite State Machine object to
 * conform it to a specific structure.
 */
type FSM_WORK = {
    
};

/**
 * Finite State Machine class to create an object
 * of the aforementioned FSM_WORK type;
 */
class FiniteStateMachine {
    private curr_state:number;
    private prev_state:number;
    private max_state:number;
    private curr_substate:number;
    private prev_substate:number;
    private max_substate:number;
    private timer1:number;
    private timer2:number;
    private timer3:number;
    private timer4:number;
    private name:string;    

    /**
     * Constructor where all the initial values are required
     * @param name            Name of the FSM
     * @param start_state     Starting state of the FSM
     * @param max_state       Maximum value of the state allowed
     * @param start_substate  Starting substate of the FSM
     * @param max_substate    Maximum value of the substate allowed
     */
    constructor(name:string,
                start_state:number,
                max_state:number,
                start_substate:number,
                max_substate:number
    ) {
        this.name = name;
        this.curr_state = this.prev_state = start_state;
        this.max_state = max_state;
        this.curr_substate = this.prev_substate = start_substate;
        this.max_substate = max_substate;
        this.timer1 = this.timer2 = this.timer3 = this.timer4 = 0;
    }
}

export type {
    FSM_WORK,
    FiniteStateMachine
}