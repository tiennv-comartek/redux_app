import React from "react";
import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';
import { Visiable_Filter } from "../contants";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";


export const Filter = () => {
    const dispatch = useDispatch();
    return (
        <Container centerContent>
            <Tabs>
                <TabList>
                    {Object.keys(Visiable_Filter).map(filterkey => {
                        const currentFilter = Visiable_Filter[filterkey];
                        return (
                            <Tab key={`filter-key-${currentFilter}`} onClick={()=>dispatch(setFilter(currentFilter))}>
                                {currentFilter}
                            </Tab>
                        )
                    })}
                </TabList>
        </Tabs>

        </Container>
    )
}