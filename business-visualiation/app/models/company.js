import DS from 'ember-data';

var Company = DS.Model.extend({
    name: DS.attr(),
    revenue: DS.attr(),
    cost: DS.attr(),
    profit: function() {
        return this.get('revenue') - this.get('cost');
    }.property('revenue', 'cost')
});

Company.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "Wayne Enterprises",
            cost: 3938,
            revenue: 1423
        },
        {
            id: 2,
            name: "Stark Industries",
            cost: 3812,
            revenue: 823
        },
        {
            id: 3,
            name: "Acme Corp",
            revenue: 6714,
            cost: 2990
        },
        {
            id: 4,
            name: "Dunder Mifflin",
            revenue: 743,
            cost: 1304
        }
    ]
});

export default Company;