/**
 * Project: node-finite-state-machine
 * Version: 1.0.0
 * Author:  Ivan De Stefani
 * Since:   15/06/2025
 */

/**
 * Enumeration for timer index
 */
enum FSM_TIMER {
    TIMER_1 = 0,
    TIMER_2 = 1,
    TIMER_3 = 2,
    TIMER_4 = 3
};

/**
 * Finite State Machine class.
 */
class FiniteStateMachine {
    private curr_state:number;
    private prev_state:number;
    private max_state:number;
    private curr_substate:number;
    private prev_substate:number;
    private max_substate:number;
    private timers: { startTime: number; duration: number }[];
    private name:string;
    private first_in_state:boolean;
    private first_in_substate:boolean;

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
        this.timers = Array(4).fill(null).map(() => ({ startTime: 0, duration: 0 }));
        this.first_in_state = true;
        this.first_in_substate = true;
    }

    /**
     * Functions to get and set the state
     * @param new_state New value for the state
     */
    public set state(new_state:number) {
        if(new_state <= this.max_state)
        {
            this.prev_state = this.curr_state;
            this.curr_state = new_state;
        }        
    }

    public get state() {
        return this.curr_state;
    }

    /**
     * Functions to get and set the substate
     * @param new_substate New value for the substate
     */
    public set substate(new_substate:number) {
        if(new_substate <= this.max_substate) {
            this.prev_substate = this.curr_substate;
            this.curr_substate = new_substate;
        }
    }

    public get substate() {
        return this.curr_substate;
    }

    /**
     * Function to start a timer in milliseconds.
     * @param index      From FSM_TIMER enum
     * @param durationMs Duration of the interval in milliseconds
     */
    fsm_set_timer(index: FSM_TIMER, durationMs: number): void {
    if (index < FSM_TIMER.TIMER_1 || index > FSM_TIMER.TIMER_3) {
      throw new Error(`[${this.name}]Indice del timer non valido (deve essere 1, 2, 3 o 4)`);
    }
    this.timers[index] = {
      startTime: Date.now(),
      duration: durationMs
    };
  }

  /**
   * Checks if the specified amount of milliseconds has elapsed.
   * @param index Index of the timer to check
   * @returns true if the specified ms have elapsed
   */
  fsm_check_timer(index: number): boolean {
    if (index < FSM_TIMER.TIMER_1 || index > FSM_TIMER.TIMER_3) {
      throw new Error(`[${this.name}]Indice del timer non valido (deve essere 1, 2, 3 o 4)`);
    }
    const timer = this.timers[index - 1];
    return Date.now() - timer!.startTime >= timer!.duration;
  }

  /**
   * Checks if it's the first time that the FSM passes in the state
   */
  public is_fsm_first_in_state() {
    let retval:boolean = this.first_in_state;

    if(this.first_in_state)
        this.first_in_state = false;

    return retval;
  }/**
   * Checks if it's the first time that the FSM passes in the state
   */
  public is_fsm_first_in_substate() {
    let retval:boolean = this.first_in_substate;

    if(this.first_in_substate)
        this.first_in_substate = false;

    return retval;
  }

}

export {
    FSM_TIMER,
    FiniteStateMachine
}