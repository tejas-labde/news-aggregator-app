import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-filter-options-container',
    standalone: true,
    imports: [],
    templateUrl: './filter-options-container.component.html',
    styleUrl: './filter-options-container.component.scss'
})
export class FilterOptionsContainerComponent {

    @Output() optionClicked = new EventEmitter();

    filterOptions = [
        { key: 'sports', label: 'Sports' },
        { key: 'finance', label: 'Finance' },
        { key: 'technology', label: 'Technology' },
        { key: 'entertainment', label: 'Entertainment' }
    ]

    onOptionClick(optionKey: string) {
        this.optionClicked.emit(optionKey);
    }
}
