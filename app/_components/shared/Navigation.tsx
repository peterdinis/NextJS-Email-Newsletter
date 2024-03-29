'use client';

import React, { FC, useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@nextui-org/react';
const Navigation: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = ['Profile'];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className='sm:hidden' justify='start'>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                />
            </NavbarContent>

            <NavbarContent className='sm:hidden pr-3' justify='center'>
                <NavbarBrand>Emails-Newletter</NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                <NavbarBrand className='font-bold'>
                    Emails-Newletter
                </NavbarBrand>
                <NavbarItem>
                    <Link color='foreground' href='#'>
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href='#' aria-current='page'>
                        Pricing
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                <NavbarItem className='hidden lg:flex'>
                    <Link href='/sign-in'>Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        color='warning'
                        href='/sign-up'
                        variant='flat'
                    >
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className='w-full'
                            color={
                                index === 2
                                    ? 'warning'
                                    : index === menuItems.length - 1
                                      ? 'danger'
                                      : 'foreground'
                            }
                            href='#'
                            size='lg'
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default Navigation;
